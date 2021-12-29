import { MentionsInput, Mention } from "react-mentions";

const WordsSearch = (props) => {

  const handleChange = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <MentionsInput
      className="newLap"
      value={props.value}
      onChange={handleChange}
    >
      <Mention
        trigger="#"
        data={props.glosary}
        markup=".#__display__#."
        className="newLap__mention"
      />
    </MentionsInput>
  );
};

export default WordsSearch;
