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

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  console.log("Body:", body);
  const { text } = body;

  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  if (index === -1) {
    return Response.json({
      message: "no comment with this id to perform this task",
    });
  }
  comments[index].text = text;
  return Response.json(comments[index]);
}
