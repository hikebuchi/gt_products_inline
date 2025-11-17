/* A方式：統合JSON-LD自動挿入スクリプト */
/* bundle_final_A_xxx.html 内の JSON-LDブロックを
   現在のページURLに応じて head に1つだけ挿入する */

(function(){

  // 現在のパス（例： /items/125565573 ）
  var path = location.pathname;

  // JSON-LD挿入済フラグ（多重挿入防止）
  if (window.__GT_JSONLD_INSERTED__) return;
  window.__GT_JSONLD_INSERTED__ = true;

  // ---------------------------------------------------------
  // ★ JSON-LD データ本体（bundle_final_A_xxx.html の集約）
  // ---------------------------------------------------------
  // 各 HTMLファイル（bundle_final_A_001.html 〜）は
  // build時にスクリプト中で自動的に読み込まれるため、
  // 下の “__GT_JSONLD_MAP__” に統合される想定です。
  //
  // ★ 重要：この部分は Python が生成した bundle_xxx の
  //    script(...) ブロックが自動的に埋め込まれます。
  // ---------------------------------------------------------
  var __GT_JSONLD_MAP__ = window.__GT_JSONLD_MAP__ || {};
  // ---------------------------------------------------------
  // ★ここまで：Python生成部分（bundleファイル）が自動で入る領域
  // ---------------------------------------------------------

  // 現在のページに対応する JSON-LD が存在しない場合は終了
  if (!__GT_JSONLD_MAP__[path]) {
    return;
  }

  // JSON-LD の script タグを生成して head に挿入
  var s = document.createElement('script');
  s.type = 'application/ld+json';
  s.text = JSON.stringify(__GT_JSONLD_MAP__[path]);
  document.head.appendChild(s);

})();
