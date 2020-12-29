import React from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import PropTypes from 'prop-types'

const Users = ({ users, loading }) => {
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="row text-center d-flex justify-content-center">
          {users.map((user) => {
            return <UserItem key={user.id} user={user} />;
          })}
        </div>
      )}
    </>
  );
};

Users.propsTypes = {
    users:PropTypes.array.isRequired,
    loading:PropTypes.bool.isRequired,
}
export default Users;
