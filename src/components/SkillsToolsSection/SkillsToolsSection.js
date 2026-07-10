import SkillsToolsData from './SkillsToolsData';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, staggerContainerVariants } from '../../utils/animationVariants';
import './SkillsToolsSection.css';

function IconTile({ item }) {
  return (
    <div className="st-tile">
      <div className="st-tile__icon">
        {item.icon
          ? <img src={item.icon} alt={item.name} loading="lazy" draggable="false" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
          : <span>{item.name.slice(0, 2).toUpperCase()}</span>
        }
      </div>
      <span className="st-tile__name">{item.name}</span>
    </div>
  );
}

function SkillsToolsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills-tools" className="st-section" aria-label="Skills and Tools">
      <div className="st-inner">

        {/* Section header */}
        <motion.div
          variants={shouldReduceMotion ? {} : fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="st-label">{SkillsToolsData.label}</p>
          <h2 className="st-headline">{SkillsToolsData.headline}</h2>
          <span className="st-cursive">{SkillsToolsData.cursiveLabel}</span>
        </motion.div>

        {/* Categories */}
        {SkillsToolsData.categories.map((category) => (
          <div key={category.id} className="st-category">
            {/* Category header */}
            <div className="st-category__header">
              <span className="st-category__title">{category.title}</span>
              <div className="st-category__line" />
            </div>

            {/* Icon grid */}
            <motion.div
              className="st-grid"
              variants={shouldReduceMotion ? {} : staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {category.items.map((item) => (
                <motion.div
                  key={item.id}
                  variants={shouldReduceMotion ? {} : fadeUp}
                >
                  <IconTile item={item} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default SkillsToolsSection;
