export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <p className="label">株式会社ミショナ ITエンジニア職種別適性テスト</p>
        <h1>L Message UI/UX改善提案</h1>
        <p>
          L Messageを実際に操作し、公式サイトやマニュアルで説明されている仕様と、
          初めて使ったときの実際の体験を比較しました。
        </p>
      </section>

      <section>
        <h2>1. 制作目的</h2>
        <p>
          L Messageは、LINE公式アカウントの運用に必要な機能が多く用意されています。
          一方で、初めて利用するユーザーにとっては、どの機能をどの順番で使えばよいか
          分かりにくい場面がありました。
        </p>
        <p>
          今回は、Luna Hair Salonという美容室アカウントを想定し、
          リッチメニュー、予約フォーム、自動応答、店舗紹介、アクセス案内を作成しました。
          その中で感じた課題をIssueとして整理し、改善案を提案します。
        </p>
      </section>

      <section>
        <h2>2. 調査方法</h2>
        <ul>
          <li>ホーム画面</li>
          <li>左メニュー</li>
          <li>フォーム作成画面</li>
          <li>リッチメニュー編集画面</li>
          <li>自動応答画面</li>
        </ul>
      </section>

      <section>
        <h2>3. 仕様と実際の比較</h2>
        <div className="tableWrap">
          <table>
            <thead>
              <tr>
                <th>公式説明・仕様</th>
                <th>実際に触って感じたこと</th>
                <th>課題</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>必要な機能が充実している</td>
                <td>機能が多く、初回ログイン時に何から始めればよいか迷った</td>
                <td>目的別の案内が不足している</td>
              </tr>
              <tr>
                <td>リッチメニューやフォーム作成ができる</td>
                <td>複数画面を行き来するため、作業の流れが分かりにくい</td>
                <td>現在地や進行度が分かりにくい</td>
              </tr>
              <tr>
                <td>指定サイズでリッチメニュー画像を登録できる</td>
                <td>AI画像や自作画像を使う場合、サイズ調整が難しい</td>
                <td>画像調整のサポートが不足している</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>4. Issue一覧</h2>
        <div className="cards">
          <article className="card">
            <h3>Issue 1：目的に合う機能を選びにくい</h3>
            <p>
              左メニューには多くの機能が並んでいますが、初めて使うユーザーにとっては、
              それぞれの機能が何をするものなのか分かりにくいと感じました。
            </p>
            <p>
              改善案として、目的別セットアップナビゲーションを追加します。
              例えば「美容室の予約導線を作る」を選ぶと、必要な機能だけがハイライトされ、
              作業順に案内されるようにします。
            </p>
            <p><strong>優先度：</strong>高</p>
            <p><strong>想定工数：</strong>8時間</p>
          </article>

          <article className="card">
            <h3>Issue 2：画面サイズによって文字やボタンが見切れる</h3>
            <p>
              フォーム作成画面やリッチメニュー編集画面では、画面サイズによって文字やボタンが
              見切れる場面がありました。
            </p>
            <p>
              改善案として、レスポンシブ表示と固定ナビゲーションを改善します。
              保存、次へ、公開状態などの重要ボタンは、画面下部または上部に固定表示します。
            </p>
            <p><strong>優先度：</strong>高</p>
            <p><strong>想定工数：</strong>6時間</p>
          </article>

          <article className="card">
            <h3>Issue 3：リッチメニュー画像の調整が難しい</h3>
            <p>
              リッチメニュー画像は指定サイズで登録する必要がありますが、
              自分の店舗の雰囲気に合う画像を作る場合、サイズ調整やトリミングが難しいと感じました。
            </p>
            <p>
              改善案として、画像自動調整機能とデザインガイドを追加します。
              指定サイズに合わせた自動リサイズやトリミング候補を表示します。
            </p>
            <p><strong>優先度：</strong>中</p>
            <p><strong>想定工数：</strong>10時間</p>
          </article>
        </div>
      </section>

      <section>
        <h2>5. 優先順位</h2>
        <div className="tableWrap">
          <table>
            <thead>
              <tr>
                <th>優先順位</th>
                <th>Issue</th>
                <th>改善内容</th>
                <th>理由</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Issue 1</td>
                <td>目的別セットアップナビゲーション</td>
                <td>初めて使う人が最初につまずく部分であり、使いやすさに直結するため</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Issue 2</td>
                <td>レスポンシブ表示と固定ナビゲーション</td>
                <td>文字やボタンの見切れは、保存漏れや操作ミスにつながるため</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Issue 3</td>
                <td>画像自動調整機能とデザインガイド</td>
                <td>画像作成の負担を減らせるが、画像処理が必要で工数が大きいため</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>6. ガントチャート</h2>
        <div className="tableWrap">
          <table>
            <thead>
              <tr>
                <th>時間</th>
                <th>作業内容</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>9:00〜9:30</td><td>仕様確認</td></tr>
              <tr><td>9:30〜10:00</td><td>Issue一覧作成</td></tr>
              <tr><td>10:00〜10:30</td><td>優先順位・確認表作成</td></tr>
              <tr><td>10:30〜11:00</td><td>休憩</td></tr>
              <tr><td>11:00〜12:00</td><td>Webページ本文作成</td></tr>
              <tr><td>13:00〜16:00</td><td>Webページ実装</td></tr>
              <tr><td>16:00〜17:00</td><td>noindex・Basic認証設定</td></tr>
              <tr><td>17:00〜19:00</td><td>GitHub・Vercel公開</td></tr>
              <tr><td>19:00〜22:00</td><td>最終確認・修正・提出準備</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>7. 公開前チェックリスト</h2>
        <ul>
          <li>noindexが設定されているか</li>
          <li>Basic認証が設定されているか</li>
          <li>ユーザー名 missiona でログインできるか</li>
          <li>パスワード kadai でログインできるか</li>
          <li>PCとスマホで表示が崩れていないか</li>
          <li>誤字脱字がないか</li>
        </ul>
      </section>

      <section>
        <h2>8. まとめ</h2>
        <p>
          L Messageは、LINE公式アカウントの運用に必要な機能が充実しています。
          一方で、初めて使うユーザーにとっては、機能の多さが分かりにくさにつながる場面がありました。
        </p>
        <p>
          目的別セットアップナビゲーション、レスポンシブ表示と固定ナビゲーション、
          画像自動調整機能を追加することで、より直感的で使いやすいシステムになると考えます。
        </p>
      </section>
    </main>
  );
}