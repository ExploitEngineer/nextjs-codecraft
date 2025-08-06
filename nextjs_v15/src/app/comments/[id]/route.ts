import { comments } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const comment = comments.find((comment) => comment.id === parseInt(id));
  if (!comment) {
    return Response.json({
      message: "There is no comment avalible with this id",
    });
  }

  return Response.json(comment);
}
