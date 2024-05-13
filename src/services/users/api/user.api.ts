import axios from "axios";

const UPDATE_USER_CONTRACT = "/user/update-contract";
const USER_APP_REGISTER = "/user/app-register";
const GET_USER_APPS = "/user/apps";
const GENERATE_NONCE = "/auth/nonce";
const LOGIN = "/auth/login";
const CREATE_USER = "/auth/create";
const CREATE_APP = "/app/register";

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

// User Routes
export const updateUserContract = async (
  contractAddress: string
): Promise<{ success: boolean; message: string }> => {
  const response: { data: { success: boolean; message: string } } =
    await axiosInstance.put(
      UPDATE_USER_CONTRACT,
      {
        data: {
          contractAddress,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  return response.data;
};

export const userAppRegister = async (
  appId: number
): Promise<{
  success: boolean;
  message: string;
}> => {
  const response: { data: { success: boolean; message: string } } =
    await axiosInstance.put(
      USER_APP_REGISTER,
      {
        appId,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  return response.data;
};

export const getUserRegisteredApps = async (): Promise<{
  success: boolean;
  message: string;
  apps: { id: number; name: string; description: string }[];
}> => {
  const response: {
    data: {
      success: boolean;
      message: string;
      apps: { id: number; name: string; description: string }[];
    };
  } = await axiosInstance.get(GET_USER_APPS, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return response.data;
};

// Auth Routes
export const generateNonce = async (
  walletAddress: string
): Promise<{
  success: boolean;
  message: string;
  nonce: string;
}> => {
  const response: {
    data: { success: boolean; message: string; nonce: string };
  } = await axiosInstance.get(`${GENERATE_NONCE}/${walletAddress}`);

  return response.data;
};

export const login = async (
  walletAddress: string
): Promise<{
  success: boolean;
  message: string;
  token: string;
}> => {
  const response: {
    data: { success: boolean; message: string; token: string; userId: string };
  } = await axiosInstance.post(
    LOGIN,
    { walletAddress },
    {
      headers: {
        "x-wallet-signature": localStorage.getItem("signature"),
      },
    }
  );

  return response.data;
};

export const createUser = async (data: {
  walletAddress: string;
  name: string;
}): Promise<{
  success: boolean;
  message: string;
}> => {
  const response: {
    data: { success: boolean; message: string };
  } = await axiosInstance.post(CREATE_USER, data);

  return response.data;
};

// App Routes
export const registerApp = async (data: {
  name: string;
  description: string;
}): Promise<{
  success: boolean;
  message: string;
}> => {
  const response: {
    data: { success: boolean; message: string };
  } = await axiosInstance.post(CREATE_APP, data);

  return response.data;
};
