import CheckIcon from '@mui/icons-material/Check';

function CheckBox(props) {
  return (
    <div className="checkbox border" onClick={ props.onClick }>
      <CheckIcon className={`checkbox__icon text ${!props.check && 'checkbox__icon--visibility-false'}`} />
    </div>
  );
}

export default CheckBox;
