import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';
import Card from '../../components/card/card.component';
import './home.styles.css';

const primaryText = `You will be presented with 10 True or False questions.`;
const secondaryText = `Can you score 100%?`;

const Home = () => {
  return (
    <section className="container">
      <div className="container_box">
        <header className="header">
          <span>Welcome to the </span>
          <h1>
            <span className="">Trivia</span>
            <span className=""> Challenge!</span>
          </h1>
        </header>
        <Card primaryContent={primaryText} secondaryContent={secondaryText} />
        <div className="button_section">
          <Button buttonType={BUTTON_TYPE_CLASSES.beginButton}>BEGIN</Button>
        </div>
      </div>
    </section>
  );
};

export default Home;
