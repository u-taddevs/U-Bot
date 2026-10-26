# U-Bot

Bot minimalista de Discord para el servidor de estudiantes de Ingeniería del Software de U-tad.

Hecho con [Bun](https://bun.com) y [Seyfert](https://github.com/tiramisulabs/seyfert).

## Uso

```bash
bun install
bun run index.ts
```

## Calidad de código

| Comando          | Qué hace                                          |
| ---------------- | ------------------------------------------------- |
| `bun run format` | Formatea el código                                |
| `bun run lint`   | Pasa el linter                                    |
| `bun run check`  | Revisa formato, lint e imports sin modificar nada |
| `bun run fix`    | Formatea, arregla el lint y ordena los imports    |

Los commits siguen [Conventional Commits](https://www.conventionalcommits.org) (`feat: ...`, `fix: ...`). Husky los valida con commitlint y revisa con Biome los archivos que vayan en el commit.
