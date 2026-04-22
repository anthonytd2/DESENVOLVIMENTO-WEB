export default function Article(props) {
  return (
    <article>
      <h2>{props.titulo}</h2>
      <p>
        Autor: {props.autor} | Publicado em: <time>{props.data}</time>
      </p>

      <p>{props.conteudoParte1}</p>

      <figure>
        <img src={props.imagemSrc} alt={props.imagemAlt} />
        <figcaption>{props.imagemLegenda}</figcaption>
      </figure>

      <p>{props.conteudoParte2}</p>
    </article>
  );
}