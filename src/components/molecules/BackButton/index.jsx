import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";

function BackButton() {
  const navigate = useNavigate();

  return (
    <Button variant="secondary" onClick={() => navigate(-1)}>
      Back
    </Button>
  );
}

export default BackButton;
