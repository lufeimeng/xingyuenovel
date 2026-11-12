// 搜索按钮简单交互（可后续对接真实搜索页）
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');

  function doSearch() {
    const keyword = searchInput.value.trim();
    if (keyword) {
      // 这里可以改成跳转到真实搜索页，例如：
      // window.location.href = `/search?q=${encodeURIComponent(keyword)}`;
      alert('搜索功能示例：' + keyword + '\n（请替换为真实搜索逻辑）');
    } else {
      searchInput.focus();
    }
  }

  searchBtn.addEventListener('click', doSearch);

  searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      doSearch();
    }
  });
});