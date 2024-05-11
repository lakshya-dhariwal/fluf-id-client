export const getUser = async (
  id: string
): Promise<{
  user: {
    id: number;
    name: string;
  };
}> => {
  return { user: { id: 1, name: "lakshya" } };
};
