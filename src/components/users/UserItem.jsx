import React from "react";
import PropTypes from 'prop-types'

const  UserItem = props =>  {
 
  const {avatar_url,login,html_url} = props.user;
 
 
    return (
      <div className="card text-center mt-5 py-3 col-3 mx-3 ">
        <img
          src={avatar_url}
          alt={login}
          className="rounded-circle"
          style={{ width: "60px", margin: "0 auto" }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm">
            More
          </a>
        </div>
      </div>
    );

}

UserItem.propTypes = {
  user:PropTypes.object.isRequired,
}
export default UserItem;
