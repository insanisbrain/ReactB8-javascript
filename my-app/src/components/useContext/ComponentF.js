import React, { useContext } from 'react';
import { UserContext, ChannelContext } from './../../App';

const ComponentF = () => {

  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      {/* <UserContext.Consumer>
        {
          user => {
            // return <div>User Context value {user}</div>
            return (
              <ChannelContext.Consumer>
                {
                  channel => {
                    return <div>User Context value, {user}, channel context, {channel}</div>
                  }
                }
              </ChannelContext.Consumer>
            )
          }
        }
      </UserContext.Consumer> */}
      {user} - {channel}
    </div>
  )
}

export default ComponentF