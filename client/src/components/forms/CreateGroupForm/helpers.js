import axios from "axios";

import baseUrls from "../../../baseUrls.js";
import getBackendErrorMessages from "../../../getBackendErrorMessages.js";
const createGroup = async (groupData, contacts, jwtToken) => {
  try {
    const groupResponse = await axios.post(
      `${baseUrls.database}/api/group`,
      groupData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}d`,
        },
      }
    );

    //adds list of contacts to created group
    await axios.post(
      `${baseUrls.database}/api/group/${groupResponse.data.groupId}`,
      contacts,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );
    return {
      status: 201,
    };
  } catch (e) {
    return {
      status: e.response.status,
      errorMessages: getBackendErrorMessages(e),
    };
  }
};

export { createGroup };
