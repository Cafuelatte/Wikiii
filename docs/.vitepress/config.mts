import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "宇宙アドオン風Wiki",
  description: "VitePressで作るゲーム攻略サイト",
  
  // ⚡超重要：ご自身のリポジトリ名（例：/my-game-wiki/）に書き換えてください
  base: '/my-game-wiki/', 

  themeConfig: {
    // 検索機能を有効化（これだけで爆速検索バーが付きます）
    search: {
      provider: 'local'
    },
    // 上部のナビゲーションバー
    nav: [
      { text: 'ホーム', link: '/' },
      { text: '役職一覧', link: '/roles/crew' }
    ],
    // 左側のサイドバーメニュー
    sidebar: [
      {
        text: '陣営メニュー',
        items: [
          { text: 'クルーメイト', link: '/roles/crew' },
          { text: 'インポスター', link: '/roles/impostor' }
        ]
      }
    ]
  }
})
