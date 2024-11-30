import { error } from "@sveltejs/kit";
import series from "../../../constants/series.js";

/**
 * @param {{ params: { id: any; }; }} dados
 */
export function load(dados) {
  const serieId = dados.params.id;

  for (let serie of series) {
    if (serie.id == serieId) {
      return { serie };
    }
  }

  error(404, "Série não encontrada");
}
