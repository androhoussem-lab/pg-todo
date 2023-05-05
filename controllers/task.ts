import Task from "@/models/task";
import { NextResponse } from "next/server";

export const index = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (id) {
      const task = await Task.findAll({
        where: {
          id: id,
        },
      });
      return NextResponse.json({ status: 200, data: task });
    } else {
      const tasks = await Task.findAll({
        order: [["id", "ASC"]], //DESC
      });
      return NextResponse.json({ status: 200, data: tasks });
    }
  } catch (error) {
    return NextResponse.json({ status: 400, error: error });
  }
};

export const create = async (req: Request) => {
  try {
    const body = await req.json();
    if (!body) return NextResponse.json({ status: 400, error: "BAD REQUEST" });
    await Task.sync();
    const task = await Task.create(body);
    return NextResponse.json({ status: 201, data: task });
  } catch (error) {
    return NextResponse.json({ status: 400, error: error });
  }
};

export const update = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const body = await req.json();
    if (!id || !body)
      return NextResponse.json({ status: 400, error: "BAD REQUEST" });
    const task = await Task.update(body, {
      where: {
        id: id,
      },
    });
    return NextResponse.json({
      status: 201,
      message: `task ${id} has been updated`,
    });
  } catch (error) {
    return NextResponse.json({ status: 400, error: error });
  }
};

export const remove = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ status: 400, error: "BAD REQUEST" });
    const task = await Task.destroy({
      where: {
        id: id,
      },
    });
    return NextResponse.json({
      status: 201,
      message: `task ${id} has been deleted`,
    });
  } catch (error) {}
};
