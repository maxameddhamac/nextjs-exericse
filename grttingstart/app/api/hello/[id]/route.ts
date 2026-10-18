import { NextResponse } from "next/server";

type RouteContext = {
    params: Promise<{ id: string }>;
};

export async function GET(_request: Request, { params }: RouteContext) {
    const { id } = await params;
    return NextResponse.json({
        id,
        name: "John Doe",
        products: [
            {
                id: 1,
                name: "Product 1",
                price: 100,
            },
        ],
    });
}
