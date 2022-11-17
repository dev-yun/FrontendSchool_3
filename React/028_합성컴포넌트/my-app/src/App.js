function Card(props) {
  return (
    <section>
      <img src="https://picsum.photos/200/300​" alt="" />
      <h2>{props.title}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        reprehenderit ipsam quas, temporibus eius est, porro ex repudiandae sed
        illum voluptatem, nemo dolorem corporis iusto sapiente facere! Illo,
        quae. Consequatur.
      </p>
      <Buttons share={props.share} learn={props.learn} />
    </section>
  );
}
function Buttons(props) {
  return (
    <>
      {props.share ? <button>SHARE</button> : ''}
      {props.learn ? <button>LEARN MORE</button> : ''}
    </>
  );
}

function App() {
  return (
    <>
      <Card title="One" share="share" learn="learn" />
      <Card title="Two" />
      <Card title="Three" share="share" />
    </>
  );
}

export default App;
