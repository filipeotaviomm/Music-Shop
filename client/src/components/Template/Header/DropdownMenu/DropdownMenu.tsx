import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { brands, categories } from "../../../../services/database.ts";
import {
  DContent,
  DItem,
  DSeparator,
  DSubContent,
  DSubTrigger,
} from "../../../../styled-components/Header.styles.tsx";
import { nanoid } from "nanoid";
import {
  DefaultButton,
  MenuButton,
} from "../../../../styled-components/Button.styles.ts";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "react-feather";

function DropdownMenuHeader() {
  const navigate = useNavigate();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <DefaultButton className="IconButton" aria-label="categorias">
          CATEGORIAS
        </DefaultButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DContent sideOffset={8}>
          {categories.map(({ url, text }) => (
            <DItem key={nanoid()}>
              <MenuButton onClick={() => navigate(`/${url}`)}>
                {text}
              </MenuButton>
            </DItem>
          ))}
          <DSeparator />
          <DropdownMenu.Sub>
            <DSubTrigger>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "4px",
                  marginInline: "8px",
                }}
              >
                MARCAS
                <ChevronRight />
              </div>
            </DSubTrigger>
            <DropdownMenu.Portal>
              <DSubContent>
                {brands.map((brand) => (
                  <DItem key={nanoid()}>
                    <DefaultButton onClick={() => navigate(`/${brand}`)}>
                      {brand.toUpperCase()}
                    </DefaultButton>
                  </DItem>
                ))}
              </DSubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator />
          <DropdownMenu.Arrow />
        </DContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default DropdownMenuHeader;
