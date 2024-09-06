export function Card({ title, description }: { title: string; description: string }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p>{description}</p>
        </div>
    );
}
