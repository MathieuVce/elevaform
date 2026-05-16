const keywords = ['Préparation', 'Récupération', 'Sur-mesure', 'À domicile', "Côte d'Azur"]

export default function KeywordBand() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {keywords.map((kw) => (
          <span key={kw} className="marquee-item">
            {kw}
          </span>
        ))}
      </div>
    </div>
  )
}
