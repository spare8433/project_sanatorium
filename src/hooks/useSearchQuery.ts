import { CITY_NAMES } from "@constants/city";
import {
  HOSPITAL_GRADES,
  PROFIT_CATEGORIES,
  SANATORIUM_CATEGORIES,
  SERVICE_FACILITY_CATEGORIES,
} from "@constants/facility";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";

const queryParamsSchema = z.object({
  searchText: z.string().optional(),
  facility: z.enum(["hospital", "serviceFacility", "sanatorium"]),
  city: z.enum([...CITY_NAMES, "all"]).optional(),
  sanatoriumCategory: z.enum([...SANATORIUM_CATEGORIES, "all"]).optional(),
  serviceFacilityCategory: z.enum([...SERVICE_FACILITY_CATEGORIES, "all"]).optional(),
  profit: z.enum([...PROFIT_CATEGORIES, "all"]).optional(),
  grade: z.enum([...HOSPITAL_GRADES, "all"]).optional(),
  pageNum: z.coerce.number().optional(),
});

export const useSearchQuery = () => {
  const [searchParams] = useSearchParams();
  const queryParamsObject = Object.fromEntries(searchParams.entries());
  const { success, data } = queryParamsSchema.safeParse(queryParamsObject);

  if (!success) throw new Error("search parameter error");

  const { searchText, facility, city, sanatoriumCategory, serviceFacilityCategory, profit, grade, pageNum } = data;

  return {
    facility,
    searchText: searchText ?? "",
    city: city ?? "all",
    sanatoriumCategory: sanatoriumCategory ?? "all",
    serviceFacilityCategory: serviceFacilityCategory ?? "all",
    profit: profit ?? "all",
    grade: grade ?? "all",
    pageNum: pageNum ?? 1,
  };
};
