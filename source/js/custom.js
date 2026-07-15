document.addEventListener('DOMContentLoaded', function() {
    // 遍历所有代码块
    document.querySelectorAll('.highlight').forEach(function(block) {
        // 如果代码块高度小于 350px，标记为“短代码块”，不折叠
        if (block.scrollHeight < 350) {
            block.classList.add('short');
            return;
        }

        // 创建“展开/折叠”按钮
        var btn = document.createElement('button');
        btn.className = 'fold-toggle';
        btn.textContent = '展开 ▾';
        block.appendChild(btn);

        // 点击切换展开/折叠状态
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            var isExpanded = block.classList.toggle('expanded');
            btn.textContent = isExpanded ? '折叠 ▴' : '展开 ▾';
        });
    });
});