export const columns = (usersToSelect) => {
  return [
    { name: "Created time", key: "ctime" },
    { name: "Originator", key: "originator" },
    { name: "Type", key: "type" },
    { name: "Severity", key: "chip" },
    { name: "Assignee", key: "assignee", users: usersToSelect },
    { name: "Status", key: "status" },
    { name: "", key: "action2" },
  ];
};
