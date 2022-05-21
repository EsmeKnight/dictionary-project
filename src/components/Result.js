import Card from "./UI/Card";

function Result(props) {
  return (
    <Card>
      <h1 className="text-center">{props.word}</h1>
      <dl className="row">
        <dt className="col-sm-3">Pronounciation</dt>
        <dd className="col-sm-9">{props.pronounciation}</dd>

        <dt className="col-sm-3">Origin</dt>
        <dd className="col-sm-9">
          <p>{props.origin}</p>
        </dd>

        <dt className="col-sm-3">Definition</dt>
        <dd className="col-sm-9">{props.definition}</dd>
      </dl>
    </Card>
  );
}

export default Result;
