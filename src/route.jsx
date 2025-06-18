import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import {
  Alarms,
  ApiUsage,
  AuditLogs,
  ConverterTemplate,
  Customers,
  Dashboard,
  DataConverters,
  EntitiesAssets,
  EntitiesDevice,
  EntitiesGateways,
  EntitiesViews,
  Home,
  ImageGallery,
  Instance,
  Integration,
  IntegrattionTemplate,
  JsLibrary,
  MobileCenter,
  NotificationCenter,
  Oauth,
  OTAUpdate,
  PlanBilling,
  ProfileAssets,
  ProfileDevice,
  ResourcesLibrary,
  Role,
  RuleChainTemplate,
  RulesChain,
  ScadaSymbols,
  Scheduler,
  Settings,
  SolutionTemplates,
  TwoFactorAuthentication,
  User,
  VersionControl,
  WhiteLabelling,
  WidgetLibrary,
} from "./pages";

function Router() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/plan-billing" element={<PlanBilling />} />
          <Route path="/alarms" element={<Alarms />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/solutions-templates" element={<SolutionTemplates />} />
          <Route path="/entities/device" element={<EntitiesDevice />} />
          <Route path="/entities/assets" element={<EntitiesAssets />} />
          <Route path="/entities/entity-views" element={<EntitiesViews />} />
          <Route path="/entities/gateways" element={<EntitiesGateways />} />
          <Route path="/profiles/profile-device" element={<ProfileDevice />} />
          <Route path="/profiles/profile-assets" element={<ProfileAssets />} />
          <Route path="/users" element={<User />} />
          <Route path="/customers" element={<Customers />} />
          <Route
            path="/integrations-center/integration"
            element={<Integration />}
          />
          <Route
            path="/integrations-center/data-convertors"
            element={<DataConverters />}
          />
          <Route path="/rules-chain" element={<RulesChain />} />
          <Route path="/edge-management/instances" element={<Instance />} />
          <Route
            path="/edge-management/rule-chain-template"
            element={<RuleChainTemplate />}
          />
          <Route
            path="/edge-management/integration-template"
            element={<IntegrattionTemplate />}
          />
          <Route
            path="/edge-management/converter-template"
            element={<ConverterTemplate />}
          />
          <Route path="/advance-features/ota-update" element={<OTAUpdate />} />
          <Route
            path="/advance-features/version-control"
            element={<VersionControl />}
          />
          <Route path="/advance-features/scheduler" element={<Scheduler />} />
          <Route path="/resources/widget-library" element={<WidgetLibrary />} />
          <Route path="/resources/image-galley" element={<ImageGallery />} />
          <Route path="/resources/scada-symbols" element={<ScadaSymbols />} />
          <Route path="/resources/javaScript-library" element={<JsLibrary />} />
          <Route
            path="/resources/resources-library"
            element={<ResourcesLibrary />}
          />
          <Route path="/notification-center" element={<NotificationCenter />} />
          <Route path="/mobile-center" element={<MobileCenter />} />
          <Route path="/api-usage" element={<ApiUsage />} />
          <Route path="/white-labeling" element={<WhiteLabelling />} />
          <Route
            path="/security/two-factor-authentication"
            element={<TwoFactorAuthentication />}
          />
          <Route path="/security/role" element={<Role />} />
          <Route path="/security/audit-logs" element={<AuditLogs />} />
          <Route path="/security/oauth-2.0" element={<Oauth />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to={"/"} replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default Router;
