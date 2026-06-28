const problemCards = [
  {
    number: "課題1",
    title: "現在地や進行度が分かりにくい",
    description:
      "L Messageは機能が多く、リッチメニュー、予約フォーム、自動返信、店舗紹介、アクセス案内など複数の設定画面を行き来しながら作業します。そのため、今どの工程にいるのか、全体のうち何％まで完成しているのかが分かりにくいと感じました。",
    points: [
      "今どの作業をしているのか分かりにくい",
      "完成まであと何が必要か分かりにくい",
      "作業の進行度が見えないため、不安になりやすい"
    ],
    improvement:
      "現在地や進行度をステップ表示やパーセンテージで確認できる仕組みが必要だと考えました。"
  },
  {
    number: "課題2",
    title: "作業の目的を見失いやすい",
    description:
      "細かい設定に集中すると、この作業は何のために必要なのか、予約や問い合わせにつながっているのかを確認しにくくなると感じました。",
    points: [
      "細かい作業に集中して目的を見失いやすい",
      "その設定がお客様の行動につながるか確認しにくい",
      "予約・問い合わせ・来店につながる導線か判断しにくい"
    ],
    improvement:
      "各作業画面に『この作業の目的』を表示し、目的を確認しながら作業できる仕組みが必要だと考えました。"
  },
  {
    number: "課題3",
    title: "お客様目線で確認しにくい",
    description:
      "管理画面で作業していると、作成者側の視点になりやすく、実際にお客様がLINEで見たときに分かりやすいかを確認しにくいと感じました。",
    points: [
      "作成者目線で作業してしまいやすい",
      "お客様から見た分かりやすさを確認しにくい",
      "予約や問い合わせにつながる完成度を判断しにくい"
    ],
    improvement:
      "お客様から見た画面や完成度を確認できるプレビュー機能が必要だと考えました。"
  }
];

const solutionCards = [
  {
    number: "改善案①",
    title: "進行度つき現在地ナビゲーション",
    relatedProblem: "現在地や進行度が分かりにくいこと。",
    solution:
      "管理画面上に、現在の作業ステップと全体の進行度を表示します。",
    example: [
      "現在の作業：リッチメニュー設定",
      "全体の進行度：45%",
      "次に必要な作業：各ボタンのリンク先設定"
    ],
    effects: [
      "作業中に迷いにくくなる",
      "完成までに必要な作業が分かりやすくなる",
      "設定漏れを防ぎやすくなる",
      "初心者でも安心して作業できる"
    ],
    estimate: "4〜6人日",
    basis:
      "既存の設定状態を読み取り、現在地と進行度を表示する改善のため、大規模な新機能ではなくUI改善として実装しやすいと考えます。ただし、どの状態を完了と判定するかを決める必要があります。",
    feasibility: "高い"
  },
  {
    number: "改善案②",
    title: "目的リマインダーつきチェックリスト",
    relatedProblem: "作業の目的を見失いやすいこと。",
    solution:
      "チェックリストに、設定項目だけでなく、その作業の目的も一緒に表示します。",
    example: [
      "予約ボタン：お客様が迷わず予約できるようにするため",
      "アクセス情報：初回来店時に迷わないようにするため"
    ],
    effects: [
      "作業の意味を確認しながら進められる",
      "目的に合わない設定を防ぎやすくなる",
      "予約や問い合わせにつながる導線を意識できる",
      "非エンジニアでも作業意図を理解しやすい"
    ],
    estimate: "3〜5人日",
    basis:
      "チェック項目と目的文を追加するUI改善が中心であり、システム全体を大きく変更する必要は少ないと考えます。業種ごとに目的文を整理する場合は、事前の要件整理が必要です。",
    feasibility: "高い"
  },
  {
    number: "改善案③",
    title: "お客様目線完成度スコア付きプレビュー",
    relatedProblem: "お客様目線で確認しにくいこと。",
    solution:
      "管理画面上で、お客様がLINEで見る画面に近いプレビューを表示し、あわせて完成度スコアを表示します。",
    example: [
      "予約ボタン：OK",
      "メニュー確認：OK",
      "お問い合わせ導線：未設定",
      "お客様目線完成度：80点 / 100点"
    ],
    effects: [
      "お客様から見た分かりやすさを確認できる",
      "公開前に不自然な導線に気づきやすい",
      "予約や問い合わせにつながる完成度を確認できる",
      "作成者目線だけでなく利用者目線で改善できる"
    ],
    estimate: "6〜10人日",
    basis:
      "プレビュー画面の作成と、完成度スコアの判定条件が必要になるため、他の改善案より工数は大きくなります。どの項目に何点を付けるかというスコア基準を決める必要があります。",
    feasibility: "中程度"
  }
];

const priorityRows = [
  {
    rank: 1,
    name: "進行度つき現在地ナビゲーション",
    reason:
      "作成者が現在地と完成度を把握でき、設定漏れを防げるため。結果としてお客様にとっても使いやすいLINEにつながる。"
  },
  {
    rank: 2,
    name: "目的リマインダーつきチェックリスト",
    reason:
      "作成者が目的を見失わずに設定できるため。お客様に必要な導線を意識しながら作業できる。"
  },
  {
    rank: 3,
    name: "お客様目線完成度スコア付きプレビュー",
    reason:
      "お客様視点で確認できる価値は高いが、プレビューやスコア判定の実装が必要で、他の案より工数が大きいため。"
  }
];

const estimateRows = [
  {
    name: "進行度つき現在地ナビゲーション",
    estimate: "4〜6人日",
    basis: "既存の設定状態を読み取り、現在地と進行度を表示するため"
  },
  {
    name: "目的リマインダーつきチェックリスト",
    estimate: "3〜5人日",
    basis: "チェック項目と目的文の追加が中心のため"
  },
  {
    name: "お客様目線完成度スコア付きプレビュー",
    estimate: "6〜10人日",
    basis: "プレビュー表示とスコア判定条件の作成が必要なため"
  }
];

const overlapRows = [
  ["リッチメニュー作成", "あり", "既存機能を使いやすくする補助"],
  ["予約フォーム作成", "あり", "既存機能を使いやすくする補助"],
  ["自動返信設定", "あり", "既存機能を使いやすくする補助"],
  ["現在地・進行度表示", "十分には確認できなかった", "今回の改善提案"],
  ["目的リマインダー", "十分には確認できなかった", "今回の改善提案"],
  ["お客様目線スコア", "十分には確認できなかった", "今回の改善提案"]
];

const workTimeRows = [
  ["課題内容の確認", "1時間"],
  ["L Messageの操作確認", "2時間"],
  ["課題点の整理", "2時間"],
  ["改善案の作成", "2時間"],
  ["工数見積もりの整理", "1.5時間"],
  ["Webページ本文作成", "2時間"],
  ["Webページ実装", "2時間"],
  ["noindex・Basic認証設定", "1時間"],
  ["動作確認・修正", "0.5時間"]
];

function SectionTitle({ label, title, description }: { label: string; title: string; description?: string }) {
  return (
    <div className="section-title">
      <span>{label}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">株式会社ミショナ 職種別適性テスト 提出用</p>
          <h1>効率よくL Messageを作成し、<br />お客様が満足できる内容に仕上げるための改善提案</h1>
          <p className="hero-lead">
            L Messageを実際に操作し、作業中に感じた「現在地の分かりにくさ」「目的の見失いやすさ」「お客様目線での確認しにくさ」を改善するための提案です。
          </p>
          <div className="hero-tags" aria-label="提案テーマ">
            <span>現在地の可視化</span>
            <span>目的の確認</span>
            <span>お客様目線</span>
          </div>
        </div>
      </section>

      <section className="container">
        <SectionTitle label="01" title="制作目的" />
        <div className="purpose-grid">
          <article className="purpose-card">
            <h3>作業しやすい</h3>
            <p>設定中に迷わず進められる状態を目指します。</p>
          </article>
          <article className="purpose-card">
            <h3>見やすい</h3>
            <p>作業の現在地や進行度を分かりやすく表示します。</p>
          </article>
          <article className="purpose-card">
            <h3>使いやすい</h3>
            <p>お客様が迷わず予約・確認できるLINE導線を作ります。</p>
          </article>
        </div>
      </section>

      <section className="container">
        <SectionTitle
          label="02"
          title="実際にL Messageを触って感じた課題"
          description="Luna Hair Salonという美容室を想定し、リッチメニュー、予約フォーム、自動返信、店舗紹介、アクセス案内などを設定する流れを確認しました。"
        />
        <div className="cards three">
          {problemCards.map((card) => (
            <article className="card" key={card.number}>
              <p className="card-number">{card.number}</p>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <h4>感じた問題点</h4>
              <ul>
                {card.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
              <div className="note">
                <strong>必要だと感じた改善</strong>
                <p>{card.improvement}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container flow-section">
        <SectionTitle label="03" title="現在の流れと課題" />
        <div className="flow">
          {["リッチメニュー作成", "予約フォーム設定", "自動返信設定", "店舗紹介・アクセス設定", "現在地が分かりにくい", "目的を見失いやすい", "お客様目線で確認しにくい"].map((item, index) => (
            <div className="flow-item" key={item}>
              <div className={index >= 4 ? "flow-box alert" : "flow-box"}>{item}</div>
              {index < 6 && <div className="arrow">↓</div>}
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <SectionTitle label="04" title="改善案3つ" description="各改善案について、課題・改善内容・期待できる効果・工数・実現可能性を整理しました。" />
        <div className="cards solutions">
          {solutionCards.map((card) => (
            <article className="card solution-card" key={card.number}>
              <p className="card-number">{card.number}</p>
              <h3>{card.title}</h3>
              <div className="mini-block">
                <strong>対応する課題</strong>
                <p>{card.relatedProblem}</p>
              </div>
              <div className="mini-block">
                <strong>改善内容</strong>
                <p>{card.solution}</p>
              </div>
              <pre>{card.example.join("\n")}</pre>
              <div className="mini-block">
                <strong>期待できる効果</strong>
                <ul>
                  {card.effects.map((effect) => <li key={effect}>{effect}</li>)}
                </ul>
              </div>
              <div className="meta-grid">
                <div>
                  <span>工数</span>
                  <strong>{card.estimate}</strong>
                </div>
                <div>
                  <span>実現可能性</span>
                  <strong>{card.feasibility}</strong>
                </div>
              </div>
              <div className="note">
                <strong>工数の根拠</strong>
                <p>{card.basis}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container split">
        <div>
          <SectionTitle label="05" title="優先順位" />
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>優先順位</th>
                  <th>改善案</th>
                  <th>理由</th>
                </tr>
              </thead>
              <tbody>
                {priorityRows.map((row) => (
                  <tr key={row.rank}>
                    <td>{row.rank}</td>
                    <td>{row.name}</td>
                    <td>{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <SectionTitle label="06" title="工数見積もり" />
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>改善案</th>
                  <th>想定工数</th>
                  <th>根拠</th>
                </tr>
              </thead>
              <tbody>
                {estimateRows.map((row) => (
                  <tr key={row.name}>
                    <td>{row.name}</td>
                    <td>{row.estimate}</td>
                    <td>{row.basis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="container">
        <SectionTitle label="07" title="既存機能との重複確認" description="今回の改善案は、既存機能を置き換えるものではなく、既存機能をより迷わず使うための補助機能として提案します。" />
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>確認項目</th>
                <th>既存機能にあるか</th>
                <th>今回の改善案との関係</th>
              </tr>
            </thead>
            <tbody>
              {overlapRows.map((row) => (
                <tr key={row[0]}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container flow-section">
        <SectionTitle label="08" title="改善後の理想の流れ" />
        <div className="flow improvement-flow">
          {["目的を確認", "現在地と進行度を見る", "必要な設定を進める", "目的リマインダーで確認", "お客様目線スコアを見る", "公開前チェック", "安心して公開"].map((item, index) => (
            <div className="flow-item" key={item}>
              <div className="flow-box success">{item}</div>
              {index < 6 && <div className="arrow">↓</div>}
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <SectionTitle label="09" title="実装時の確認事項" />
        <div className="check-list">
          {[
            "現在のL Messageで取得できる設定状態の範囲",
            "どの状態を完了と判定するか",
            "現在地ナビを新規ユーザーだけに表示するか",
            "既存ユーザーにも表示するか",
            "目的リマインダーを業種別に変えるか",
            "お客様目線スコアの判定基準をどう決めるか",
            "プレビューをLINEアプリ表示にどこまで近づけるか",
            "表示が増えすぎて、逆に画面が複雑にならないか",
            "無料プランと有料プランで表示内容を分ける必要があるか"
          ].map((item) => <div key={item} className="check-item">{item}</div>)}
        </div>
      </section>

      <section className="container">
        <SectionTitle label="10" title="本制作物の作成時間" />
        <p className="lead-text">本制作物の作成には、7日間、1日あたり約2時間、合計約14時間を予定しています。実際の提出時には、作業開始から完了までの実測時間を記載します。</p>
        <div className="table-wrap small-table">
          <table>
            <thead>
              <tr>
                <th>作業内容</th>
                <th>時間</th>
              </tr>
            </thead>
            <tbody>
              {workTimeRows.map((row) => (
                <tr key={row[0]}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="summary">
        <div className="container summary-card">
          <SectionTitle label="11" title="まとめ" />
          <p>
            L Messageは、LINE公式アカウントを効率よく運用するための便利なサービスです。しかし、機能が多いからこそ、初めて使う人は作業中に現在地を見失いやすく、設定内容が目的に合っているか、お客様から見て分かりやすいかを判断しにくい可能性があります。
          </p>
          <p>
            特に、進行度つき現在地ナビゲーションを導入することで、ユーザーは今どの作業をしているのか、次に何をすればよいのか、どのくらい完成しているのかを確認しながら進められます。
          </p>
          <p>
            最終的には、L Messageを使う人が効率よく設定でき、店舗のお客様にとっても見やすく、使いやすいLINE公式アカウントを作成できる状態を目指します。
          </p>
        </div>
      </section>
    </main>
  );
}
