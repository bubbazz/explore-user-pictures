// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  sec: {
    appID: 33
  },
  rest: {
    ServiceUrl: 'http://localhost:4200/',
    //ServiceUrl: 'https://dev.myexcon.com/srv/Perma/SalesAudit/',
    LoginUrl: 'https://www.myexcon.com/srv/sec/',
    Endpoints: {
      PasswordSettings: 'PasswordSettings',
      // Dashboard
      DashboardR_Summary: '{uid}/RegulationDashboard',
      // Home
      HomeR_Summary: '{uid}/home',
      // Task
      TaskC: '{uid}/Task',
      TaskR_List_Reforged: '{uid}/TaskReforged',
      TaskR_List: '{uid}/Task',
      TaskHistoryR_List: '{uid}/Task/{tskID}/History',
      TaskU_ReopenTask: '{uid}/Task/{tskID}/reopen',
      TaskListExcelExport: '{uid}/task/TaskExport/{culture}',
      TaskU_Plan: '{uid}/Task/{tskID}/plan',
      TaskU_Plan_TaskList: '{uid}/Task/TaskList/plan',
      TaskAdditionalUserLoginR_Summary: '{uid}/TaskAdditionalUserLogin/{tskID}/Summary',
      TaskAdditionalUserLoginC_LoginList: '{uid}/Task/{tskID}/TaskAdditionalUserLogin/AuditorList',
      // TaskRegulation
      CheckviewRegulationR_Summary: '{uid}/Task/{tskID}/CheckviewRegulation',
      CheckviewRegulationDetailsR_Summary: '{uid}/Task/{tskID}/CheckviewRegulationDetailsR_Summary/{cnfID}',
      RegulationQuestionareR_List: '{uid}/Task/{tskID}/Paragraph/{parID}/RegulationQuestionare',
      RegulationQuestionareResultCU: '{uid}/Task/{tskID}/RegulationQuestionare/{rquestID}/Result',
      RegulationQuestionareResultAttachmentR_List: '{uid}/RegulationQuestionareResult/{FKID}/Attachment',
      RegulationQuestionareResultAttachmentR: '{uid}/RegulationQuestionareResult/{FKID}/Attachment/{ID}',
      RegulationQuestionareResultAttachment: '{uid}/RegulationQuestionareResult/{FKID}/Attachment/{ID}',
      RegulationQuestionareResultAttachmentC: '{uid}/RegulationQuestionareResult/{FKID}/Attachment',
      RegulationQuestionareResultAttachmentD: '{uid}/RegulationQuestionareResult/{FKID}/Attachment',
      Task_ParagraphR_List: '{uid}/Task/{tskID}/Paragraph',
      RegulationActionR_List: '{uid}/Task/{tskID}/RegulationAction',
      RegulationActionU: '{uid}/RegulationAction/{racID}',
      RegulationActionC: '{uid}/Task/{tskID}/Paragraph/{parID}/RegulationAction',
      RegulationActionU_Submit: '{uid}/RegulationAction/{racID}/submit',
      RegulationActionU_Accept: '{uid}/RegulationAction/{racID}/accept',
      RegulationActionU_Resolve: '{uid}/RegulationAction/{racID}/resolve',
      RegulationActionU_Check: '{uid}/RegulationAction/{racID}/check',
      RegulationResultR_List: '{uid}/Task_Paragraph/{tskparID}/Result',
      RegulationResultC: '{uid}/Task_Paragraph/{tskparID}/Result',
      RegulationResultU: '{uid}/RegulationResult/{rrID}',
      RegulationResultU_ReasonUpdate: '{uid}/RegulationResult/{rrID}/Reason',
      RegulationResultU_ExtendDeadline: '{uid}/RegulationResult/{rrID}/Extend',
      RegulationQuestionareHelpR_List: '{uid}/Paragraph/{rquestID}/Help',
      TaskU_FinishAudit_Regulation: '{uid}/Task/{tskID}/FinishReglationAudit',
      TaskU_FinishQuestioning_Regulation: '{uid}/Task/{tskID}/FinishQuestioning',
      TaskU_Paragraph: '{uid}/Task_Paragraph/{tskparID}',
      TaskU_Dispose: '{uid}/Task/{tskID}/dispose',
      TaskU_Dispose_TaskList: '{uid}/Task/TaskList/dispose',
      TaskU_Settings: '{uid}/Task/{tskID}/Settings',
      TaskU_Cancel: '{uid}/Task/{tskID}/cancel',
      TaskU_Cancel_TaskList: '{uid}/Task/TaskList/cancel',
      TaskR_Report: '{uid}/Task/{tskID}/Report',
      TaskR_ResultReport: '{uid}/Task/{tskID}/ResultReport',
      RegulationQuestionnaire_Scope: '{uid}/RegulationQuestionnaire/{tskID}/{lDisplayMode}/{rDisplayMode}',
      RegulationQuestionnaireR_List_Selected: '{uid}/RegulationQuestionnaire/{tskID}/selected/{DisplayMode}',
      RegulationQuestionnaireR_List_NotSelected: '{uid}/RegulationQuestionnaire/{tskID}/notselected/{DisplayMode}',
      RegulationQuestionnaireC: '{uid}/RegulationQuestionnaire/{tskID}',
      RegulationActionList: '{uid}/RegulationAction',
      RegulationRegulationResultList: '{uid}/Task/{FKID}/RegulationAttachment',
      TaskAttachmentC_Regulation: '{uid}/Task/{FKID}/RegulationAttachment',
      RegulationActionAttachmentR_List: '{uid}/RegulationAction/{FKID}/Attachment',
      RegulationActionAttachmentR: '{uid}/RegulationAction/{FKID}/Attachment/{ID}',
      RegulationActionAttachment: '{uid}/RegulationAction/{FKID}/Attachment/{ID}',
      RegulationActionAttachmentC: '{uid}/RegulationAction/{FKID}/Attachment',
      RegulationActionAttachmentD: '{uid}/RegulationAction/{FKID}/Attachment',
      RegulationResultAttachmentR_List: '{uid}/RegulationResult/{FKID}/Attachment',
      RegulationResultAttachmentR: '{uid}/RegulationResult/{FKID}/Attachment/{ID}',
      RegulationResultAttachment: '{uid}/RegulationResult/{FKID}/Attachment/{ID}',
      RegulationResultAttachmentC: '{uid}/RegulationResult/{FKID}/Attachment',
      RegulationResultAttachmentD: '{uid}/RegulationResult/{FKID}/Attachment',
      RegulationResultU_Finish: '{uid}/RegulationResult/Finish/ResultList',
      RegulationActionHistoryR_List: '{uid}/RegulationAction/{ID}/History',
      RegulationResultHistoryR_List: '{uid}/RegulationResult/{ID}/History',
      RegulationActionCommentR_List: '{uid}/RegulationAction/{racID}/comment',
      RegulationActionCommentC: '{uid}/RegulationAction/{racID}/comment',
      // Dealer
      DealerList: '{uid}/dealer',
      DealerDetails: '{uid}/dealer/{dlrID}',
      DealerC: '{uid}/dealer',
      DealerUnitC: '{uid}/dealer/{dlrID}/dealerUnit',
      DealerUnitR_List: '{uid}/dealer/{dlrID}/dealerUnit',
      DealerUnitU: '{uid}/dealer/{dlrID}/dealerUnit/{dlruID}',
      DealerUnitD: '{uid}/Dealer/{dlrID}/dealerUnit/{dlruID}',
      // Client
      ClientC: '{uid}/Client',
      ClientU: '{uid}/Client/{clID}',
      ClientR_List: '{uid}/Client',
      ClientR_Summary: '{uid}/Client/{clID}',
      ClientGroup_DealerC: '{uid}/ClientGroup_Dealer',
      ClientGroup_DealerD: '{uid}/ClientGroup_Dealer',
      ClientGroupR_List: '{uid}/Client/{clID}/ClientGroup',
      ClientGroupR_List_DealerList: '{uid}/ClientGroup/DealerList',
      ClientGroupC: '{uid}/Client/{clID}/ClientGroup',
      ClientGroupU: '{uid}/ClientGroup/{clgID}',
      ClientGroupD: '{uid}/ClientGroup/{clgID}',
      KidR_List: '{uid}/Kid',
      KidC: '{uid}/Kid',
      KidU: '{uid}/Kid/{kidID}',
      DealerTemplateU: '{uid}/Client/{clID}/DealerTemplate/{dlrtID}',
      DealerTemplatePlaceholderC: '{uid}/Client/{clID}/TemplatePlaceholder',
      DealerTemplatePlaceholderD: '{uid}/Client/{clID}/TemplatePlaceholder/{dlrtID}',
      DealerTemplateC: '{uid}/Client/{clID}/Template',
      DealerTemplateR_List: '{uid}/Client/{clID}/Template',
      // Client Config
      ConfigR_List: '{uid}/Client/{clID}/Config',
      ConfigC: '{uid}/Client/{clID}/Config',
      ConfigR_Summary: '{uid}/Client/{clID}/Config/{cnfID}',
      ConfigU: '{uid}/Config/{cnfID}',
      ConfigCopy: '{uid}/Config/{cnfID}',
      ClaimTemplateU: '{uid}/Config/{cnfID}/Template/{claimtID}',
      ClaimTemplatePlaceholderC: '{uid}/Config/{cnfID}/TemplatePlaceholder',
      ClaimTemplatePlaceholderD: '{uid}/Config/{cnfID}/TemplatePlaceholder/{claimtID}',
      ClaimTemplateR_List: '{uid}/Config/{cnfID}/Template',
      BonusR_Summary: '{uid}/Bonus',
      BonusR_List: '{uid}/BonusList',
      BonusU: '{uid}/Bonus/{boId}',
      BonusC: '{uid}/Bonus',
      AuditorsR_List: '{uid}/Auditors',
      SegmentR_List: '{uid}/Segment/{cnfID}',
      SegmentC: '{uid}/Segment',
      SegmentU: '{uid}/Segment/{SegID}',
      QuestionnaireR_FollowUps: '{uid}/FollowUps',
      QuestionnaireResultU_FollowUp: '{uid}/QuestionnaireResult/{rstID}/FollowUp',
      ValuationR_Summary: '{uid}/Valuation',
      ValuationDetailsR_Summary: '{uid}/Task/{tskID}/Valuation',
      ManagersR_List: '{uid}/Managers'
    }
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
