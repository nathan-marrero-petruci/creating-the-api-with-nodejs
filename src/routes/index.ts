import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";

const router = Router();

router.use("/api/categories", categoriesRoutes);
router.use("/api/specifications", specificationsRoutes);

export { router };
