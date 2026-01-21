"use server";

import supabase from "@/config/supabase-config";

export const getUsersReport = async () => {
  try {
    const { data, error } = await supabase.rpc("user_reports");

    if (error) {
      return {
        success: false,
        message: error.message,
      };
    }

    return {
      success: true,
      data: data[0],
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};

export const getSubscriptionsReport = async () => {
  try {
    const { data, error } = await supabase.rpc("user_subscriptions");

    if (error) {
      return {
        success: false,
        message: error.message,
      };
    }

    return {
      success: true,
      data: data[0],
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};
