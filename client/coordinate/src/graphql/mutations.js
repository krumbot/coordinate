import gql from 'graphql-tag';

const LogIn = gql`
  mutation LogIn {
    logIn {
      username
      id
      photo
    }
  }
`;

const CreateGroup = gql`
  mutation CreateGroup($name:String!, $targetLocation:LocationArgType, $userIDArray:[ID]) {
    createGroup(name:$name, targetLocation:$targetLocation, userIDArray:$userIDArray) {
      id
    }
  }
`;

const InviteUsersToGroup = gql`
  mutation InviteUsersToGroup($groupID:ID!, $userIDArray:[ID]!) {
    inviteUsersToGroup(groupID:$groupID, userIDArray:$userIDArray) {
      groupID
    }
  }
`;

const UpdateLocation = gql`
  mutation UpdateLocation($newLocation:LocationArgType!) {
    updateLocation(newLocation:$newLocation) {
      groupsUpdated
    }
  }
`;

const AcceptGroupInvite = gql`
  mutation AcceptGroupInvite($groupID:ID!, $notificationID:ID) {
    acceptGroupInvite(groupID:$groupID, notificationID:$notificationID) {
      groupID
    }
  }
`;

export { LogIn, CreateGroup, InviteUsersToGroup, UpdateLocation, AcceptGroupInvite };
