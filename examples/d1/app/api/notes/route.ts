type Note = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
};

const notes: Note[] = [];

function toRouteErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "Unexpected error";
}

export async function GET() {
  try {
    return Response.json({
      notes: [...notes].sort(
        (a, b) =>
          new Date(b.createdAt).getTime() -
          new Date(a.createdAt).getTime()
      ),
    });
  } catch (error) {
    return Response.json(
      { error: toRouteErrorMessage(error) },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as {
      title?: string;
      content?: string;
    };

    const title = payload.title?.trim() ?? "";
    const content = payload.content?.trim() ?? "";

    if (!title) {
      return Response.json(
        { error: "title is required" },
        { status: 400 }
      );
    }

    const note: Note = {
      id: Date.now(),
      title,
      content,
      createdAt: new Date().toISOString(),
    };

    notes.push(note);

    return Response.json(
      { note },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { error: toRouteErrorMessage(error) },
      { status: 500 }
    );
  }
}