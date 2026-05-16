export default function Comment() {
  return (
    <section className="comment" id="comment">
      <div className="comment-bg-glow" aria-hidden="true" />
      <div className="section-head">
        <span className="eyebrow" data-fx="fade-up">
          Comment ça marche
        </span>
        <h2 className="section-title" data-fx="fade-up">
          Un parcours <em>simple</em>
          <br />
          et structuré
        </h2>
        <div className="section-divider" />
      </div>

      <div className="steps" data-stagger>
        <div className="step">
          <div className="step-num">
            <span>01</span>
          </div>
          <div className="step-title">Premier contact</div>
          <div className="step-line" />
          <p className="step-desc">
            Contactez-moi ou prenez rendez-vous directement en ligne pour un premier échange sur
            votre projet et vos besoins. Ce premier rendez-vous peut se faire en présentiel ou par
            téléphone, selon votre préférence.
          </p>
        </div>
        <div className="step">
          <div className="step-num">
            <span>02</span>
          </div>
          <div className="step-title">Bilan initial</div>
          <div className="step-line" />
          <p className="step-desc">
            Ensemble, nous établissons votre profil, identifions votre intervention et définissons
            vos objectifs pour construire la meilleure approche.
          </p>
        </div>
        <div className="step">
          <div className="step-num">
            <span>03</span>
          </div>
          <div className="step-title">Programme personnalisé</div>
          <div className="step-line" />
          <p className="step-desc">
            Je conçois et assure le suivi de votre programme pré et/ou post-opératoire, adapté à
            chaque étape de votre parcours.
          </p>
        </div>
      </div>

      <div className="deplacement" data-fx="fade-up">
        <div className="deplacement-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </div>
        <div className="deplacement-divider" />
        <p className="deplacement-text">
          <strong>Je me déplace à votre domicile avec mon matériel</strong> — où que vous soyez
          sur la Côte d&apos;Azur, vos séances se déroulent dans votre environnement, à votre
          rythme.
        </p>
        <button
          className="btn btn-leather deplacement-cta"
          data-open-booking
        >
          Réserver
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </section>
  )
}
