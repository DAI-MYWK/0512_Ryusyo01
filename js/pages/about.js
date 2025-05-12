// 会社情報ページ用JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // 拠点情報タブ切り替え機能
  const locationTabs = document.querySelectorAll(".location-tab");
  const locationMaps = document.querySelectorAll(".location-map");

  locationTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // アクティブクラスをすべてのタブから削除
      locationTabs.forEach((t) => t.classList.remove("active"));
      // クリックされたタブにアクティブクラスを追加
      this.classList.add("active");

      // データ属性から対応するマップのIDを取得
      const locationId = this.getAttribute("data-location");

      // すべてのマップを非表示にする
      locationMaps.forEach((map) => map.classList.remove("active"));

      // 対応するマップを表示する
      document.getElementById(`map-${locationId}`).classList.add("active");
    });
  });

  // タイムラインのアニメーション
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // タイムラインアイテムを監視
  document.querySelectorAll(".timeline-item").forEach((item) => {
    observer.observe(item);
  });
});
