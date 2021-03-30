// 第一题：汉语单词数组
var a_HanYu = [
	[
		"软件", "硬件", "存储器", "主存",
		"因特网", "可编程的", "便携式的(可移植的)", "信道(通道)",
		"抽象的", "吞吐量", "拓补", "通信",
		"消耗", "分布式的", "语言", "平台"
	],
	[
		"只读存储器",
		"动态随机存取存储器",
		"城域网","局域网","广域网",
		"自动柜员机","磁盘操作系统",
		"操作系统","域名系统"
	],
	[
		"By 1995,there were multiple backbones,hundreds of mid-level(i.e. regional) networks,tens of thousands of LANs,millions of hosts,and tens of millions of users.",
		"A fast-growing global network of graphical electronic documents you can browse,interact with,and even create yourself.",
		"From the user's point of view,the Web consists of a vast,worldwide collection of documents,usually just called pages for short.",
		"Once your Web browser is open and connected to the Internet,the page currently designated as your browser's starting page or home page will be displayed within the browser window.",
		"All browsers have navigational tools to help you move forward or backward through the pages viewed in your current Internet session,as well as buttons or menu options to print Web pages when necessary."
	],
	[
		"存在有各种各样的教育应用程序可用。教育软件是设计来教一门或多门技能，诸如阅读、数学、拼写、外语、世界地理，或者帮助准备一些标准化的测试。",
		"电子商务是使用信息技术和电子通信网络，以电子的、无纸的形式交换商务信息和实施诸事务处理(transaction)。",
		"字处理软件允许你使用计算机来创建、编辑、存储和打印文档。你能够容易地插入、删除和移动一些词、句子和段落——任何时候(ever)都不使用橡皮擦(eraser)。",
		"电子表格(spreadsheet)是什么？电子表格软件从会计的排成栏的(columnar)工作表(worksheet)取其名，它仿制(imitate)该工作表。电子表格是由行与列的相交点形成的单元格(cell)集合组成的工作表。每个单元格能存储一项信息：数、单词和短语、公式",
		"中间件是连接软件组件或企业应用程序的软件。中间件使得软件开发人员更容易执行通信和输入/输出，以便它们可以专注于他们特定目的的应用程序。通常，它支持复杂的、分布式的业务软件应用程序。"
	]
]

// 第一题：英语翻译数组
var a_FanYi = [
	[
		"software", "hardware", "storage", "primary storage",
		"Internet", "programmable", "portable", "channel",
		"abstract", "throughput", "topology", "communication",
		"consume", "Distributed", "language", "platform",
	],
	[
		"ROM(Read-Only Memory)",
		"DRAM(Dynamic Random Access Memory)",
		"MAN(Metropolitan Area Network)",
		"LAN(Local Area Network)",
		"WAN(Wide Area Network)",
		"ATM(Automated Teller Machine)",
		"DOS(Disk Operating System)",
		"OS(Operating System)",
		"DNS(Domain Name System)"
	],
	[
		"到1995年，已经有多个主干网，数百个中级(即区域)网络，成千上万的局域网，数百万的主机和数千万的用户。",
		"一个快速增长的全球图形电子文档网络，你可以浏览，交互，甚至自己创建。",
		"从用户的角度来看，网络由庞大的、遍及全球的文档集合组成，通常简称为页面。",
		"一旦你的网络浏览器打开并连接到互联网，当前指定为你的浏览器起始页或主页的页面将显示在浏览器窗口中。",
		"所有的浏览器都有导航工具来帮助你向前或向后浏览你当前因特网会话中查看的页面，以及必要时打印网页的按钮或菜单选项。"
	],
	[
		"There exists a wide variety of educational applications available.Educational software is designed to teach one or more skills,such as reading, math, spelling, foreign languages, world geography,or to help prepare for some standardized test.",
		"Electronic commerce is the use of information technology and electronic communication networks, to exchange business information and implement various transaction processing in an electronic and paperless form.",
		"Word processing software allows you to use your computer to create, edit, store and print documents. You can easily insert, delete and move some words, sentences, and paragraphs - without using an eraser at any time.",
		"What is a spreadsheet? The spreadsheet software takes its name from the column of an accountant's worksheet,which imitates the worksheet.A spreadsheet is a worksheet consisting of a collection of cells formed by the intersection of rows and columns.Each cell can store one piece of information: numbers, words and phrases, formulas",
		"Middleware is the software that connects software components or enterprise applications. Middleware makes it easier for software developers to perform communication and input/output, so they can focus on the specific purpose of their application. Typically, it supports complex, distributed business software applications."
	]
]

var count = 0;
var selectdnum = 0;
var hy = document.getElementById("HanYu");
var fy = document.getElementById("FanYi");


// 网页加载时对原文和翻译部分添加文本
function loads() {
	hy.innerText = a_HanYu[selectdnum][0];
	fy.innerText = a_FanYi[selectdnum][0];
}

// 上一个单词
function prevEn() {
	visibleEn();
	if (count == 0) {
		count = a_HanYu[selectdnum].length;
	}
	count--;
	fuZhi(count);
	
}

// 显示单词
function showEn() {
	fy.style.visibility = "visible";
}

// 隐藏单词
function visibleEn() {
	fy.style.visibility = "hidden";
}

// 为原文和翻译部分添加文本
function fuZhi(con) {
	hy.innerText = a_HanYu[selectdnum][con];
	fy.innerText = a_FanYi[selectdnum][con];
}

// 下一个单词
function nextEn() {
	visibleEn();
	if (count == a_HanYu[selectdnum].length - 1) {
		count = -1;
	}
	count++;
	fuZhi(count);
}

function setFontSize(hanyu, yingyu) {
	hy.style.fontSize = hanyu + "px";
	fy.style.fontSize = yingyu + "px";
}

// 换题
function huanTi(k) {
	switch(k) {
		case "0":
			selectdnum = 0;
			count = 0;
			setFontSize(55, 55);
			visibleEn();
			fuZhi(count);
			break;
		case "1":
			selectdnum = 1;
			count = 0;
			setFontSize(55, 55);
			visibleEn();
			fuZhi(count);
			break;
		case "2":
			selectdnum = 2;
			count = 0;
			setFontSize(20, 20);
			visibleEn();
			fuZhi(count);
			break;
		case "3":
			selectdnum = 3;
			count = 0;
			setFontSize(20, 20);
			visibleEn();
			fuZhi(count);
			break;
	}
}
