import { BaseHeader, Contents, Navigation } from "./style";

export default function Header() {
  return (
    <BaseHeader>
      <div>
        <Contents>로고 자리</Contents>

        <Navigation>
          <ul>
            <li>메뉴 1</li>
            <li>메뉴 2</li>
          </ul>
        </Navigation>
      </div>
    </BaseHeader>
  );
}
