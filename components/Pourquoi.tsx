export default function Pourquoi() {
  return (
    <section className="section section-paper" id="pourquoi">
      <div className="section-head">
        <span className="eyebrow" data-fx="fade-up">
          Pourquoi ElevaForm
        </span>
        <h2 className="section-title" data-fx="fade-up">
          Un accompagnement pensé
          <br />
          pour <em>sublimer</em> votre transformation
        </h2>
        <div className="section-divider" />
      </div>
      <div className="pourquoi-grid" data-stagger>
        <article className="pourquoi-card">
          <div className="pourquoi-num">01</div>
          <h3>Approche sur mesure</h3>
          <p>
            Chaque programme est entièrement adapté à votre intervention et à
            votre profil. Aucun protocole générique — uniquement ce dont votre
            corps a besoin.
          </p>
        </article>
        <article className="pourquoi-card">
          <div className="pourquoi-num">02</div>
          <h3>Expertise pré &amp; post-opératoire</h3>
          <p>
            Une méthodologie pensée pour optimiser chaque phase et sublimer les
            résultats de l&apos;opération, de la préparation jusqu&apos;à la
            récupération complète.
          </p>
        </article>
        <article className="pourquoi-card">
          <div className="pourquoi-num">03</div>
          <h3>Suivi personnalisé</h3>
          <p>
            Un accompagnement continu à chaque étape pour des résultats
            durables. Vous n&apos;êtes jamais seul dans votre parcours de
            transformation.
          </p>
        </article>
      </div>
    </section>
  )
}
