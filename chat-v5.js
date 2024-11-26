// 创建按钮并添加到页面
const button = document.createElement('button');
button.style.position = 'fixed';
button.style.bottom = '1.5rem';
button.style.right = '1.5rem';
button.style.zIndex = '1000'; // 确保按钮在最上层
button.style.height = '50px'; // 设置高度
button.style.borderRadius = '25px'; // 圆形按钮
button.style.backgroundColor = '#000'; // 背景
button.style.color = 'white'; // 白色文字
button.style.border = 'none'; // 无边框
button.style.fontSize = '16px'; // 字体大小
button.style.cursor = 'pointer'; // 鼠标指针样式
button.style.display = 'flex'; // 使用 flexbox 布局
button.style.alignItems = 'center'; // 垂直居中
button.style.justifyContent = 'space-between'; // 文字和图标分开显示
button.style.padding = '0 20px'; // 添加左右内边距，使内容不紧贴按钮边缘

// 创建左侧文字部分
const buttonText = document.createElement('span');
buttonText.innerText = 'Ask AI';
button.appendChild(buttonText);


// 创建右侧图标部分
const buttonImg = document.createElement('img');
buttonImg.src = 'https://www.qinovo.com.cn/wp-content/uploads/2024/10/qinovo_logo.jpeg'; // 替换为你图标的 URL
buttonImg.style.height = '30px'; // 设置图标宽度
buttonImg.style.marginLeft = '10px'; // 给文字和图标之间添加一些间距
button.appendChild(buttonImg);

document.body.appendChild(button);

let iframe; // 声明 iframe 变量

// 点击按钮后显示或隐藏 iframe
button.addEventListener('click', () => {
    if (!iframe) {
        // 创建 iframe 并设置属性
        iframe = document.createElement('iframe');
        iframe.src = 'https://nas.yanghong.dev:19005/?kb=5b45bd0f'; // 替换为你想嵌入的网页
        iframe.style.position = 'fixed';
        iframe.style.bottom = '6rem'; // 调整位置以避免覆盖按钮
        iframe.style.right = '1.5rem';
        iframe.style.width = '400px'; // 设置宽度
        iframe.style.height = '600px'; // 设置高度
        iframe.style.border = '1px solid #ddd'; // 添加边框
        iframe.style.zIndex = '1000'; // 确保在最上层
        iframe.style.borderRadius = '8px'; // 为iframe添加圆角
        iframe.style.backgroundColor = 'white'; // 背景色
        document.body.appendChild(iframe);

        // 更新按钮文字
        // button.innerText = 'Close';
    } else {
        // 关闭 iframe
        document.body.removeChild(iframe);
        iframe = null; // 重置 iframe 变量
    }
});
