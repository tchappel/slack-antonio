interface Props {
  params: {
    workspaceId: string;
  };
}

const WorkspaceIdPage = ({ params: { workspaceId } }: Props) => {
  return <div>WorkspaceId: {workspaceId}</div>;
};

export default WorkspaceIdPage;
