"use client"

const Page = () => {

    const postData = async () => {
        try {
            const response = await fetch('/api/data', { // Change URL to your actual API endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: "button clicked" }) // Sending click state
                
            });

            if (response.ok) {
                alert("Data posted successfully");
            } else {
                alert("Failed to post data");
            }
        } catch (error) {
            console.error("Error posting data:", error);
        }
    }

    return (
        <div>
            <div>
               
                <button onClick={postData}>Post Data</button>
            </div>
        </div>
    )
}

export default Page
