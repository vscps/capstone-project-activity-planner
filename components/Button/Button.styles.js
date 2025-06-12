import styled from "styled-components";
import { MdBookmarkAdd } from "react-icons/md";
import { MdBookmarkAdded } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import { MdArrowForward } from "react-icons/md";

export const FavoriteIcon = styled(MdBookmarkAdd)`
  margin: 5px;
  color: #dad8d8;
  font-size: 25px;
  z-index: 10;
  cursor: pointer;
`;

export const RemoveFavoriteIcon = styled(MdBookmarkAdded)`
  margin: 0 5px 0 0;
  color: #ffc200;
  font-size: 25px;
  z-index: 10;
  cursor: pointer;
`;

export const DeleteIcon = styled(MdDelete)`
  margin: 0 5px 0 0;
  color: white;
  font-size: 25px;
  cursor: pointer;
`;

export const EditIcon = styled(MdEdit)`
  margin: 0 5px 0 0;
  color: white;
  font-size: 25px;
  cursor: pointer;
`;

export const SubmitIcon = styled(MdArrowForward)`
  margin: 0 5px 0 0;
  color: white;
  font-size: 25px;
  cursor: pointer;
`;

export const CancelIcon = styled(MdCancel)`
  margin: 0 5px 0 0;
  color: white;
  font-size: 25px;
  cursor: pointer;
`;

export const ConfirmIcon = styled(GiConfirmed)`
  margin: 0 5px 0 0;
  color: white;
  font-size: 25px;
  cursor: pointer;
`;

export const StyledButton = styled.button`
  align-items: center;
  background-clip: padding-box;
  background-color: ${(props) =>
    props.$purpose === "favorite"
      ? "#83b36c"
      : props.$purpose === "delete"
      ? "#f44336"
      : props.$purpose === "edit"
      ? "#FFC200"
      : props.$purpose === "submit"
      ? "#FFC200"
      : props.$purpose === "cancel"
      ? "#f44336"
      : props.$purpose === "confirm"
      ? "#83b36c"
      : ""};
  border: 1px solid transparent;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 15px 15px 15px 0;
  height: 50px;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    background-color: ${(props) =>
      props.$purpose === "favorite"
        ? "#83b36c"
        : props.$purpose === "delete"
        ? "#f44336"
        : props.$purpose === "edit"
        ? "#FFC200"
        : props.$purpose === "submit"
        ? "#FFC200"
        : props.$purpose === "cancel"
        ? "#f44336"
        : props.$purpose === "confirm"
        ? "#83b36c"
        : ""};
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:not(:disabled):hover {
    transform: translateY(-1px);
  }

  &:not(:disabled):active {
    background-color: ${(props) =>
      props.$purpose === "favorite"
        ? "#83b36c"
        : props.$purpose === "delete"
        ? "#f44336"
        : props.$purpose === "edit"
        ? "#FFC200"
        : props.$purpose === "submit"
        ? "#FFC200"
        : props.$purpose === "cancel"
        ? "#f44336"
        : props.$purpose === "confirm"
        ? "#83b36c"
        : ""};
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    transform: translateY(0);
  }

  &:disabled {
    background-color: #ddd;
    color: #999;
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
    opacity: 0.6;
  }
`;

export const LoadingSpinner = styled.div`
  width: 25px;
  height: 25px;
  border: 4px solid #fff;
  border-bottom-color: #ff3d00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  margin-right: 5px;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
