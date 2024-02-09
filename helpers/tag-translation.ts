export enum Tags {
    EMPTY = 'EMPTY',
    MAIS_VENDIDO = 'MAIS_VENDIDO',
    PICANTE = 'PICANTE',
    LIMITADO = 'LIMITADO',
    VEGANO = 'VEGANO',
    SEM_GLUTEN = 'SEM_GLUTEN',
    ORGANICO = 'ORGANICO',
    SAUDAVEL = 'SAUDAVEL',
    FIT = 'FIT',
    ARTESANAL = 'ARTESANAL',
    GOURMET = 'GOURMET',
    VEGETARIANO = 'VEGETARIANO',
  }
  
  export const tagTranslation = (tag: Tags): string => {
    switch (tag) {
      case Tags.EMPTY:
        return 'Vazio';
      case Tags.MAIS_VENDIDO:
        return 'Mais Vendido';
      case Tags.PICANTE:
        return 'Picante';
      case Tags.LIMITADO:
        return 'Limitado';
      case Tags.VEGANO:
        return 'Vegano';
      case Tags.SEM_GLUTEN:
        return 'Sem Glúten';
      case Tags.ORGANICO:
        return 'Orgânico';
      case Tags.SAUDAVEL:
        return 'Saudável';
      case Tags.FIT:
        return 'Fit';
      case Tags.ARTESANAL:
        return 'Artesanal';
      case Tags.GOURMET:
        return 'Gourmet';
      case Tags.VEGETARIANO:
        return 'Vegetariano';
      default:
        return 'Tag Desconhecida';
    }
  };
  