import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getGroups } from "../../actions";
import { FaBullhorn } from "react-icons/fa";
import ViewGroupModal from "../../views/pages/Groups/ViewGroupModal/ViewGroupModal.js";
import { deleteGroup } from "./helpers.js";
import DeleteModal from "../DeleteModal/DeleteModal.js";
import { BsPencil } from "react-icons/bs";
import { FaTrashCan } from "react-icons/fa6";
import "./GroupCard.scss";

const GroupCard = ({ groupId, groupName, setDeleteResultIndicator }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((state) => {
    return state.user;
  });

  const [showDeleteGroupModal, setShowDeleteGroupModal] = useState(false);

  const [showViewGroupModal, setShowViewGroupModal] = useState(false);

  const [backendDeleteErrors, setBackendDeleteErrors] = useState([]);

  const onDelete = async () => {
    const response = await deleteGroup(groupId, user.jwtToken);

    if (response.status === 204) {
      await dispatch(getGroups());

      displayResultIndicator("success");
    } else {
      setBackendDeleteErrors(response.errorMessages);

      displayResultIndicator("fail");
    }
  };

  const displayResultIndicator = (outcome) => {
    setDeleteResultIndicator({
      show: true,
      outcome: outcome,
      operation: "delete",
      message: "",
    });

    setShowDeleteGroupModal(false);
  };

  return (
    <>
      <button
        className="GroupCard"
        onClick={() => {
          setShowViewGroupModal(true);
        }}
      >
        <span className="GroupCard__content">
          <span className="GroupCard__name">{groupName}</span>
        </span>
        <span
          onClick={(e) => {
            navigate(`/groups/edit/${groupId}`);
            e.stopPropagation();
          }}
          className="GroupCard__action-button GroupCard__pencil"
        >
          <BsPencil />
        </span>

        <span
          className="GroupCard__action-button GroupCard__trash"
          onClick={(e) => {
            setDeleteResultIndicator({
              show: false,
              outcome: "",
              operation: "",
              message: "",
            });
            setShowDeleteGroupModal(true);
            e.stopPropagation();
          }}
        >
          <FaTrashCan />
        </span>
      </button>
      {showDeleteGroupModal ? (
        <DeleteModal
          closeModal={() => {
            setShowDeleteGroupModal(false);
          }}
          message={
            <p className="DeleteModal__text">
              Are you sure you want to delete group{" "}
              <span className="DeleteModal__name">{`"${groupName}"?`}</span>
            </p>
          }
          onDelete={onDelete}
        />
      ) : null}

      {showViewGroupModal ? (
        <ViewGroupModal
          closeModal={() => {
            setShowViewGroupModal(false);
          }}
          groupId={groupId}
          jwtToken={user.jwtToken}
        />
      ) : null}
    </>
  );
};

export default GroupCard;
