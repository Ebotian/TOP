### 一周完成方案（基于你的技术背景优化）

---

#### **技术选型建议**

- **前端**：React（Odin Project 快速入门 + 组件化开发）
- **后端**：Python Flask（轻量级，快速搭建 API）
- **爬虫**：Requests + Beautiful Soup（简单易上手）
- **AI 模型**：OpenAI API（直接调用，文档丰富）
- **数据库**：SQLite（无需额外配置，适合原型）

---

### **每日任务规划**

#### **Day 1-2：React 基础 + 爬虫速成**

**目标**：完成 React 核心概念学习 + 实现简单爬虫

1. **React 学习（6h）**

   - Odin Project 的 React 基础模块（重点学习）：
     - JSX 语法
     - 组件化开发（函数组件、Props）
     - 状态管理（useState）
     - 基础路由（react-router-dom）
   - **实战**：搭建一个对话式界面框架（输入框 + 消息列表）

   ```jsx
   // 示例：简易对话组件
   function ChatInterface() {
   	const [messages, setMessages] = useState([]);
   	const [input, setInput] = useState("");

   	const handleSend = () => {
   		setMessages([...messages, { text: input, isUser: true }]);
   		setInput("");
   	};

   	return (
   		<div>
   			<div className="messages">
   				{messages.map((msg, i) => (
   					<div key={i}>{msg.text}</div>
   				))}
   			</div>
   			<input value={input} onChange={(e) => setInput(e.target.value)} />
   			<button onClick={handleSend}>发送</button>
   		</div>
   	);
   }
   ```

2. **Python 爬虫（4h）**

   - 学习资源：[Beautiful Soup 官方文档](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)
   - **实战**：抓取新闻网站标题和摘要（以 BBC 为例）

   ```python
   import requests
   from bs4 import BeautifulSoup

   def scrape_news(url):
     response = requests.get(url)
     soup = BeautifulSoup(response.text, 'html.parser')
     articles = []
     for item in soup.select('.article-title'):  # 根据实际网站结构调整选择器
       title = item.text.strip()
       summary = item.find_next('p').text
       articles.append({'title': title, 'summary': summary})
     return articles
   ```

---

#### **Day 3：后端 API + AI 集成**

**目标**：搭建 Flask API，集成 OpenAI 总结功能

1. **Flask 基础（2h）**

   - 创建 API 端点 `/analyze`，接收文本并返回 AI 分析结果

   ```python
   from flask import Flask, request, jsonify
   import openai

   app = Flask(__name__)
   openai.api_key = 'YOUR_KEY'

   @app.route('/analyze', methods=['POST'])
   def analyze():
     text = request.json.get('text')
     response = openai.ChatCompletion.create(
       model="gpt-3.5-turbo",
       messages=[{"role": "user", "content": f"总结以下内容：{text}"}]
     )
     return jsonify({'summary': response.choices[0].message.content})
   ```

2. **定时任务（2h）**

   - 使用 `APScheduler` 实现每小时自动执行爬虫 + AI 分析

   ```python
   from apscheduler.schedulers.background import BackgroundScheduler

   def scheduled_task():
     articles = scrape_news('https://www.bbc.com/news')
     for article in articles:
       summary = analyze(article['summary'])  # 调用 OpenAI
       save_to_db(article, summary)  # 存储到 SQLite

   scheduler = BackgroundScheduler()
   scheduler.add_job(scheduled_task, 'interval', hours=1)
   scheduler.start()
   ```

---

#### **Day 4：前后端联调**

**目标**：连接 React 前端与 Flask 后端

1. **API 调用（3h）**

   - 在 React 中通过 `fetch` 发送用户配置参数到后端

   ```jsx
   const fetchAnalysis = async (keyword) => {
   	const response = await fetch("/api/configure", {
   		method: "POST",
   		headers: { "Content-Type": "application/json" },
   		body: JSON.stringify({ keyword }),
   	});
   	const data = await response.json();
   	setMessages([...messages, { text: data.summary, isUser: false }]);
   };
   ```

2. **参数调整界面（3h）**

   - 添加表单组件让用户输入关键词和任务频率

   ```jsx
   function ConfigPanel({ onConfigSubmit }) {
   	const [keyword, setKeyword] = useState("");

   	return (
   		<div>
   			<input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
   			<button onClick={() => onConfigSubmit(keyword)}>更新配置</button>
   		</div>
   	);
   }
   ```

---

#### **Day 5-6：功能完善 + 测试**

**目标**：优化核心功能，处理边界情况

1. **数据库集成（4h）**

   - 使用 SQLite 存储历史任务结果

   ```python
   import sqlite3

   def save_to_db(article, summary):
     conn = sqlite3.connect('tasks.db')
     c = conn.cursor()
     c.execute('INSERT INTO results VALUES (?, ?)', (article['title'], summary))
     conn.commit()
     conn.close()
   ```

2. **错误处理（2h）**

   - 添加爬虫超时重试、API 调用限流

   ```python
   # 爬虫重试逻辑
   from tenacity import retry, stop_after_attempt

   @retry(stop=stop_after_attempt(3))
   def scrape_news(url):
     # ...
   ```

---

#### **Day 7：文档 + 部署**

**目标**：整理代码，撰写文档

1. **部署说明（2h）**

   - 编写 `README.md`，包含：
     - 环境依赖安装命令（`pip install -r requirements.txt`）
     - 如何配置 OpenAI API 密钥
     - 启动命令（`flask run` + `npm start`）

2. **代码优化（2h）**
   - 分离配置文件（如 `config.py` 存储 API 密钥）
   - 添加代码注释

---

### **关键注意事项**

1. **优先级管理**：先完成核心功能（对话交互 + 定时分析），再考虑扩展功能（如历史记录查看）。
2. **简化 UI**：使用现成的 React 组件库（如 MUI）加速开发。
3. **Mock 数据**：若爬虫受阻，可先用静态 JSON 文件模拟数据流。
4. **备份代码**：每完成一个模块立即提交到 GitHub，避免意外丢失。

### **推荐工具链**

- **前端**：Create React App（快速初始化）
- **Python 依赖管理**：pipenv
- **API 测试**：Postman 或 curl

按照此方案，你可以在 7 天内交付一个符合要求的 MVP 作品。若遇到阻塞问题，优先搜索“Python 爬虫 BBC 示例”或“React 对话界面教程”快速解决。
