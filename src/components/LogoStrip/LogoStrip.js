import LogoStripData from './LogoStripData';
import './LogoStrip.css';

function CompanyItem({ company }) {
  return (
    <div className="logo-strip__item">
      {company.logo ? (
        <img
          src={company.logo}
          alt={company.name}
          className="logo-strip__logo"
          loading="lazy"
        />
      ) : (
        <span className="logo-strip__name">{company.name}</span>
      )}
    </div>
  );
}

function LogoStrip() {
  const { label, companies } = LogoStripData;

  // Duplicate array for seamless loop
  const doubled = [...companies, ...companies];

  return (
    <section className="logo-strip" aria-label={label}>
      <p className="logo-strip__label">{label}</p>
      <div className="logo-strip__track-wrap">
        <div className="logo-strip__track">
          {doubled.map((company, index) => (
            <CompanyItem
              key={`${company.id}-${index}`}
              company={company}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoStrip;