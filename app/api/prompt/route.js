import { connectToDB } from '@utils/database';
import Prompt from '@models/prompt';

export const GET = async (request) => {
    try {
        await connectToDB();
        const prompts = await Prompt.find({})
            .populate("creator")
            .sort({ createdAt: -1 });

        const response = new Response(JSON.stringify(prompts), { status: 200 });

        // Set cache control headers to prevent caching
        response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
        response.headers.set('Pragma', 'no-cache');

        return response;
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch all prompts", { status: 500 });
    }
};
