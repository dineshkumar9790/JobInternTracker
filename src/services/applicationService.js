const API_URL = "http://localhost:5000/api/applications";

export const getApplications = async() => {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch applications");
    }

    return response.json();
};

export const createApplication = async(application) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(application),
    });

    if (!response.ok) {
        throw new Error("Failed to create");
    }

    return response.json();
};

export const applyForApplication = async(id) => {
    const response = await fetch(`${API_URL}/${id}/apply`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Failed to apply");
    }

    return response.json();
};

export const updateApplication = async(
    id,
    application
) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(application),
    });

    if (!response.ok) {
        throw new Error("Failed to update");
    }

    return response.json();
};

export const deleteApplication = async(id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error("Failed to delete");
    }

    return response.json();
};